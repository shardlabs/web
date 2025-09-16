'use client';
import { create } from '@orama/orama';
import { useDocsSearch } from 'fumadocs-core/search/client';
import {
    SearchDialog,
    SearchDialogClose,
    SearchDialogContent,
    SearchDialogHeader,
    SearchDialogIcon,
    SearchDialogInput,
    SearchDialogList,
    SearchDialogOverlay,
    type SharedProps,
} from 'fumadocs-ui/components/dialog/search';

async function initOrama(locale?: string): Promise<any> {
    return create({
        schema: { _: 'string' },
        // https://docs.orama.com/docs/orama-js/supported-languages
        language: locale ?? 'english',
    });
}

export default function DefaultSearchDialog(props: SharedProps) {
    const { search, setSearch, query } = useDocsSearch({
        type: 'static',
        initOrama,
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
                <SearchDialogList
                    items={query.data !== 'empty' ? query.data : null}
                />
            </SearchDialogContent>
        </SearchDialog>
    );
}
