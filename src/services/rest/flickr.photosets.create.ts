/**
 * This file was auto-generated on 2023-10-20T16:36:46.761Z
 * flickr.photosets.create
 * Create a new photoset for the calling user.
 */
export interface FlickrPhotosetsCreateParams {
  /**
   * A title for the photoset.
   */
  title: string
  /**
   * A description of the photoset. May contain limited html.
   */
  description?: string
  /**
   * The id of the photo to represent this set. The photo must belong to the calling user.
   */
  primary_photo_id: string
}
