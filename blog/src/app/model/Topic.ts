import { Article } from './Article'

export class Topic {
    public id!: number
    public description!: string
    public article!: Article[]
}