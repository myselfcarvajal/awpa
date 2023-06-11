import {config} from 'dotenv'

config()

export const AWS_BUCKED_NAME = process.env.AWS_BUCKED_NAME
export const AWS_BUCKED_REGION = process.env.AWS_BUCKED_REGION
export const AWS_PUBLIC_ACCESS_KEY = process.env.AWS_PUBLIC_ACCESS_KEY
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY

export const SECRET = process.env.SECRET

export const MYSQL_URL = process.env.MYSQL_URL
export const MYSQLDATABASE = process.env.MYSQLDATABASE
export const MYSQLHOST = process.env.MYSQLHOST
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD
export const MYSQLPORT = process.env.MYSQLPORT
export const MYSQLUSER = process.env.MYSQLUSER
