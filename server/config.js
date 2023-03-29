import {config} from 'dotenv'

config()

export const AWS_BUCKED_NAME = process.env.AWS_BUCKED_NAME
export const AWS_BUCKED_REGION = process.env.AWS_BUCKED_REGION
export const AWS_PUBLIC_ACCESS_KEY = process.env.AWS_PUBLIC_ACCESS_KEY
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY

export const SECRET = process.env.SECRET

export const database = process.env.database
export const username = process.env.username
export const password = process.env.password
