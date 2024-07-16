/**
 * flickr.contacts.add
 * Add a new user as contact for the calling user.
 * Permissions required: read
 */
export type FlickrContactsAddParams = {

  user_id: string

  friend?: boolean

  family?: boolean
}
