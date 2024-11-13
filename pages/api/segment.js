import Segment from 'segment'
import path from 'path'

// Initialize the segmenter
const segment = new Segment()
segment.useDefault()

// Load custom dictionary
const customDictPath = path.join(process.cwd(), 'pages', 'api', 'custom_dict.txt')
segment.loadDict(customDictPath)

// API endpoint for segmenting text
// DO NOT MODIFY THIS FILE
export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const { text } = req.body

        if (!text || typeof text !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'Please provide valid text content',
            })
        }

        // Split text into Chinese and non-Chinese parts
        const parts = text.split(/([^\u4e00-\u9fa5]+)/)
        
        // Process each part: segment Chinese text, keep non-Chinese as is
        const result = parts
            .map((part) => {
                if (/[\u4e00-\u9fa5]/.test(part)) {
                    return segment.doSegment(part, {
                        simple: true
                    })
                }
                return [part]
            })
            .flat()
            .filter((item) => item !== '')

        const stringResult = result.join(' ')

        res.status(200).json({
            success: true,
            segments: {
                string: stringResult,
                array: result,
            },
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal server error',
        })
    }
}
