class ImageUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  version :thumbnail_small do
    eager
    resize_to_fit(200, 200)
    cloudinary_transformation :quality => 80
  end

  version :thumbnail_medium do
    eager
    resize_to_fit(400, 400)
    cloudinary_transformation :quality => 80
  end

end
