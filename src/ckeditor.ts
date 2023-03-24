import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { List } from '@ckeditor/ckeditor5-list';
import { Markdown } from './markdown';

export default class ClassicEditor extends ClassicEditorBase
{
    public static override builtinPlugins = [
        Essentials,
        Bold,
        Italic,
        Heading,
        Indent,
        List,
        Markdown,
        Superscript
    ];

    public static override defaultConfig = {
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'superscript',
                '|',
                'bulletedList',
                'numberedList',
                'outdent',
                'indent'
            ]
        },
        language: 'en-gb'
    };
}
