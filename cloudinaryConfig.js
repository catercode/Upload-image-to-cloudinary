const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: 'catercode',
    api_key: '864342247813819',
    api_secret: '9TZus_idyuc-u3GrRtBxjLItcsI'
})

exports.uploads = (file) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({ url: result.url, id: result.public_id })
        }, { resource_type: "auto" })
    })
}
