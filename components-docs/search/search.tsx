'use client';
import { useDocsSearch } from 'fumadocs-core/search/client';
import {
    SearchDialog,
    SearchDialogClose,
    SearchDialogContent,
    SearchDialogFooter,
    SearchDialogHeader,
    SearchDialogIcon,
    SearchDialogInput,
    SearchDialogList,
    SearchDialogOverlay,
    TagsList,
    TagsListItem,
    type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { useState } from 'react';

export default function DefaultSearchDialog(props: SharedProps) {
    const [tag, setTag] = useState<string | undefined>();
    const { locale } = useI18n(); // (optional) for i18n
    const { search, setSearch, query } = useDocsSearch({
        type: 'fetch',
        locale,
        tag,
    });

    return (
        <SearchDialog
            search={search}
            onSearchChange={setSearch}
            isLoading={query.isLoading}
            {...props}
        >
            <SearchDialogOverlay />
            <SearchDialogContent>
                <SearchDialogHeader>
                    <SearchDialogIcon />
                    <SearchDialogInput />
                    <SearchDialogClose />
                </SearchDialogHeader>
                <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
                <SearchDialogFooter className="flex flex-row">
                    <TagsList tag={tag} onTagChange={setTag}>
                        <TagsListItem value="docs">文档</TagsListItem>
                        <TagsListItem value="tutorials">教程</TagsListItem>
                    </TagsList>
                </SearchDialogFooter>
            </SearchDialogContent>
        </SearchDialog>
    );
}