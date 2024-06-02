module.exports = () => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'daydx970t',
          api_key: '991293466651968',
          api_secret: 'aDNV5WfcnxcuTLE9xQkEGz9kEgQ',
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    "video-field":{
      enabled:true
    },
  });