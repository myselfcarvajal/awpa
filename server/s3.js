import { S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import {AWS_BUCKED_NAME, AWS_BUCKED_REGION, AWS_PUBLIC_ACCESS_KEY, AWS_SECRET_ACCESS_KEY} from './config.js'
import fs from 'fs'

//Establecer la conexion mediante S3Client
const client = new S3Client({
    region: AWS_BUCKED_REGION,
    credentials: {
        accessKeyId: AWS_PUBLIC_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
})

export async function uploadFile(file) {
    //Archivo que esta siendo leido por partes
    const stream = fs.createReadStream(file.tempFilePath)
    //Parametros a subir
    const uploadParams = {
        Bucket: AWS_BUCKED_NAME,
        Key: file.name,
        Body: stream
    }

    //Lo que se subira a aws S3
    const command = new PutObjectCommand(uploadParams)
    return await client.send(command)
}

export async function getFiles(){
    const command = new ListObjectsCommand({
        Bucket: AWS_BUCKED_NAME
    })
    return await client.send(command)
} 

export async function getFile(filename){
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKED_NAME,
        Key: filename
    })
    return await client.send(command)
}

export async function dowloadFile(filename){
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKED_NAME,
        Key: filename
    })
    const result = await client.send(command)
    console.log(result)
    result.Body.pipe(fs.createWriteStream(`./download/${filename}`))
}
