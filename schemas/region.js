import {defineField, defineType} from 'sanity'

export default defineType({
    name : 'region',
    title : 'Region',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
    ]
})