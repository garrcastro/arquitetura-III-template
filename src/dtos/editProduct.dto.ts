import z from 'zod'

export interface CreateProductInputDTO {
    id: string,
    name: string,
    price: number
}
export interface EditProductInputDTO{
    idToEdit: string,
    id: string,
    name: string,
    price: number
}

export interface CreateProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export interface EditProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export const CreateProductSchema = z.object({
    id: z.string({
        required_error: "'id' é obrigatória.",
        invalid_type_error: "'id deve ser do tipo string."
    }).min(1, "'id' deve ter pelo menos um caractere."),
    name: z.string({
        required_error: "'name' é obrigatório.",
        invalid_type_error: "'name' deve ser do tipo string."
    }).min(2, "'name' deve possuir pelo menos dois caracteres."),
    price: z.number({
        required_error: "'price' é obrigatório.",
        invalid_type_error: "'price' deve ser do tipo number."
    })
}).transform(data => data as CreateProductInputDTO)

export const EditProductSchema = z.object({
    idToEdit: z.string({
        required_error: "'id' é obrigatória.",
        invalid_type_error:"'id' deve ser do tipo string."
    }),
    id: z.string({
        required_error: "'id' é obrigatória.",
        invalid_type_error: "'id deve ser do tipo string."
    }).min(1, "'id' deve ter pelo menos um caractere."),
    name: z.string({
        required_error: "'name' é obrigatório.",
        invalid_type_error: "'name' deve ser do tipo string."
    }).min(2, "'name' deve possuir pelo menos dois caracteres."),
    price: z.number({
        required_error: "'price' é obrigatório.",
        invalid_type_error: "'price' deve ser do tipo number."
    })
}).transform(data => data as EditProductInputDTO)