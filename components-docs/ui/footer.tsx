'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Asterisk, Check, Github } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DocsFooter({ filePath }: { filePath: string }) {
    const [clickedBtn, setClickedBtn] = useState<"yes" | "no" | null>(null);
    const [feedback, setFeedback] = useState("");
    const [contact, setContact] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsSubmitted(false)
            setIsSubmitting(true);
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    is_helpful: clickedBtn === "yes",
                    feedback,
                    contact,
                    page: filePath
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFeedback("");
                setContact("");
            } else {
                console.error('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`${clickedBtn ? 'mb-80' : 'mb-80'} w-full px-4 py-6 flex flex-col items-center justify-center border rounded-lg overflow-hidden bg-white dark:bg-neutral-900 `}>

            <div className="w-full px-2 font-semibold">
                这份文档对您有帮助吗？
            </div>

            <div className="w-full flex flex-col md:flex-row gap-2 mt-8 px-2">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Button
                        variant={clickedBtn === "yes" ? "default" : "secondary"}
                        onClick={() => setClickedBtn("yes")}
                        className="w-full "
                    >
                        👍有帮助
                    </Button>
                    <Button
                        variant={clickedBtn === "no" ? "default" : "secondary"}
                        onClick={() => setClickedBtn("no")}
                        className="w-full "
                    >
                        👎没有帮助
                    </Button>
                </div>

                <Button variant="outline" onClick={() => window.open(`https://github.com/leolin4258/rwkvcn-docs/edit/main/content/${filePath}`, '_blank')}>
                    <Github />
                    在Github上编辑
                </Button>
            </div>

            <motion.div
                className={`w-full flex flex-col gap-4 overflow-hidden px-2`}
                initial={{ opacity: 0, y: 0, height: 0 }}
                animate={{ opacity: clickedBtn ? 1 : 0, y: clickedBtn ? 0 : 10, height: clickedBtn ? 'auto' : 0 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5
                }}
            >
                <div className="w-full flex flex-col gap-4 mt-8">
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">意见反馈(可选)</p>
                        <Textarea
                            placeholder="请输入您的意见"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">联系方式(可选)</p>
                        <Input
                            placeholder="请输入您的联系方式"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-2 mt-2">
                        <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? '提交中...' : '提交'}
                        </Button>
                        <Button variant="outline" onClick={() => setClickedBtn(null)} >
                            取消
                        </Button>
                </div>

                {
                    isSubmitted && (
                        <div className="w-full flex flex-row gap-2 text-green-500">
                            <Check className="w-4 h-4" />
                            <p className="text-sm">
                                提交成功, 感谢您的反馈!
                            </p>
                        </div>
                    )
                }
            </motion.div>

        </div>
    )
}

