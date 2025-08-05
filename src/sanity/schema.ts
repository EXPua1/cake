import { defineType, defineField } from 'sanity'

// Схема для тортов
export const cakeSchema = defineType({
    name: 'cake',
    title: 'Cake',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().min(0)
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Cheesecake', value: 'cheesecake' },
                    { title: 'Custom Cake', value: 'custom' },
                    { title: 'Madeleine', value: 'madeleine' },
                    { title: 'Wedding Cake', value: 'wedding' },
                    { title: 'Birthday Cake', value: 'birthday' },
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'weight',
            title: 'Weight (kg)',
            type: 'number',
            validation: Rule => Rule.min(0)
        }),
        defineField({
            name: 'servings',
            title: 'Servings',
            type: 'number',
            validation: Rule => Rule.min(1)
        }),
        defineField({
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'allergens',
            title: 'Allergens',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'available',
            title: 'Available',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            validation: Rule => Rule.min(0)
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'category'
        }
    }
})

// Схема для начинок
export const fillingSchema = defineType({
    name: 'filling',
    title: 'Filling',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'price',
            title: 'Additional Price',
            type: 'number',
            validation: Rule => Rule.required().min(0)
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Fruit', value: 'fruit' },
                    { title: 'Chocolate', value: 'chocolate' },
                    { title: 'Cream', value: 'cream' },
                    { title: 'Nuts', value: 'nuts' },
                    { title: 'Special', value: 'special' },
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'allergens',
            title: 'Allergens',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'available',
            title: 'Available',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            validation: Rule => Rule.min(0)
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'category'
        }
    }
})

// Схема для заказов
export const orderSchema = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            readOnly: true
        }),
        defineField({
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'customerPhone',
            title: 'Customer Phone',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'customerEmail',
            title: 'Customer Email',
            type: 'string',
            validation: Rule => Rule.email()
        }),
        defineField({
            name: 'deliveryAddress',
            title: 'Delivery Address',
            type: 'text'
        }),
        defineField({
            name: 'deliveryDate',
            title: 'Delivery Date',
            type: 'datetime',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'cake',
            title: 'Cake',
            type: 'reference',
            to: [{ type: 'cake' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'filling',
            title: 'Selected Filling',
            type: 'reference',
            to: [{ type: 'filling' }]
        }),
        defineField({
            name: 'customMessage',
            title: 'Custom Message',
            type: 'text'
        }),
        defineField({
            name: 'weight',
            title: 'Weight (kg)',
            type: 'number',
            validation: Rule => Rule.min(0.1)
        }),
        defineField({
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
            validation: Rule => Rule.required().min(0)
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Confirmed', value: 'confirmed' },
                    { title: 'In Progress', value: 'in_progress' },
                    { title: 'Ready', value: 'ready' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Cancelled', value: 'cancelled' },
                ]
            },
            initialValue: 'pending',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'notes',
            title: 'Internal Notes',
            type: 'text'
        }),
        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            readOnly: true
        }),
    ],
    preview: {
        select: {
            title: 'customerName',
            subtitle: 'orderNumber',
            description: 'status'
        }
    }
})

export const schemaTypes = [cakeSchema, fillingSchema, orderSchema] 