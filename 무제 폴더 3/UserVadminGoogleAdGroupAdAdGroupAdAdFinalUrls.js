cube(`UserVadminGoogleAdGroupAdAdGroupAdAdFinalUrls`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_ad_group_ad_ad_group_ad_ad_final_urls\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adGroupAdAdGroupAdAdFinalUrls: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.final_urls\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.final Urls`
    }
  },
  
  dataSource: `default`
});
