import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
    slug: 'footer',
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'footer',
            label: 'Footer',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text',
                },
                {
                    name: 'copyright',
                    label: 'Copyright Notice',
                    type: 'text',
                }
            ],
            minRows: 1,
            maxRows: 5,
        }
    ]
}