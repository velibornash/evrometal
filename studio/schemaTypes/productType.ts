import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Proizvod',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naziv (SR)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      options: {
        list: [
          {title: 'ALU sistemi', value: 'alu'},
          {title: 'PVC sistemi', value: 'pvc'},
          {title: 'Staklo', value: 'glass'},
          {title: 'Okovi i oprema', value: 'hardware'},
          {title: 'Vrata i kapije', value: 'doors'},
          {title: 'Ograde i gelenderi', value: 'fences'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'nameEn',
      title: 'Name (EN)',
      type: 'string',
    }),
    defineField({
      name: 'nameDe',
      title: 'Name (DE)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis (SR)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (EN)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'descriptionDe',
      title: 'Beschreibung (DE)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Glavna slika',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Galerija slika',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'specs',
      title: 'Tehničke karakteristike',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Oznaka (SR)', type: 'string'},
            {name: 'labelEn', title: 'Label (EN)', type: 'string'},
            {name: 'labelDe', title: 'Bezeichnung (DE)', type: 'string'},
            {name: 'value', title: 'Vrednost (SR)', type: 'string'},
            {name: 'valueEn', title: 'Value (EN)', type: 'string'},
            {name: 'valueDe', title: 'Wert (DE)', type: 'string'},
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'document',
      title: 'Tehnički list / PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Istaknut proizvod',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
})
