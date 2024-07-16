/**
 * flickr.stats.getTotalViewsForDateRange
 * Get total views for a given date range
 * Permissions required: read
 */
export type FlickrStatsGetTotalViewsForDateRangeParams = {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.
 */
  date_until: string
  
}
