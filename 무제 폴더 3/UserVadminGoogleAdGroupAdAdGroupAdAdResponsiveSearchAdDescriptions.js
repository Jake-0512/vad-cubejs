cube(`UserVadminGoogleAdGroupAdAdGroupAdAdResponsiveSearchAdDescriptions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_ad_group_ad_ad_group_ad_ad_responsive_search_ad_descriptions\``,
  
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
    adGroupAdAdGroupAdAdResponsiveSearchAdDescriptionsText: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.responsive_search_ad.descriptions.text\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.responsive Search Ad.descriptions.text`
    }
  },
  
  dataSource: `default`
});
