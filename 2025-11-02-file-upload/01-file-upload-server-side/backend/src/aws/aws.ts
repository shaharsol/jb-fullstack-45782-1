import { CreateBucketCommand, S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import config from 'config'

const s3Connection = JSON.parse(JSON.stringify(config.get<object>('s3.connection')))

const s3Client = new S3Client(s3Connection)

export async function createAppBucketIfNotExists() {
    try {
        const result = await s3Client.send(
            new CreateBucketCommand({
                Bucket: config.get<string>('s3.bucket')
            })
        )
        console.log(result)
    } catch (e) {
        console.log('bucket creation failed. silenting exception, bucket probably already exists', e)        
    }
}

export async function testUpload() {
    try {
        const upload = new Upload({
            client: s3Client,
            params: {
                Bucket: config.get<string>('s3.bucket'),
                Key: 'test.txt',
                ContentType: 'text/plain',
                Body: 'hello world, localstack seems to work'
            }
        })

        const result = await upload.done()
        console.log('upload result:', result)
    } catch (e) {
        console.log('exception in test upload: ', e)
    }
}

export default s3Client