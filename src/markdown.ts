import type { Editor } from '@ckeditor/ckeditor5-core';
import { Markdown as MarkdownBase } from '@ckeditor/ckeditor5-markdown-gfm';
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

export class Markdown extends MarkdownBase {
    /**
     * @inheritDoc
     */
    constructor(editor: Editor)
    {
        super(editor);

        (editor.data.processor as unknown as GFMDataProcessor).keepHtml('sup');
    }
}
