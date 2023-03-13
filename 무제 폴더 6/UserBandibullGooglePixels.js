cube(`UserBandibullGooglePixels`, {
  sql: `SELECT * FROM vad.user_bandibull_google_pixels`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [pixelsId, pixelsName, pixelsOwnerAdAccountAccountId, pixelsOwnerAdAccountId, pixelsOwnerBusinessId, pixelsOwnerBusinessName]
    }
  },
  
  dimensions: {
    pixelsCode: {
      sql: `${CUBE}.\`pixels.code\``,
      type: `string`,
      title: `Pixels.code`
    },
    
    pixelsCreationTime: {
      sql: `${CUBE}.\`pixels.creation_time\``,
      type: `string`,
      title: `Pixels.creation Time`
    },
    
    pixelsDataUseSetting: {
      sql: `${CUBE}.\`pixels.data_use_setting\``,
      type: `string`,
      title: `Pixels.data Use Setting`
    },
    
    pixelsFirstPartyCookieStatus: {
      sql: `${CUBE}.\`pixels.first_party_cookie_status\``,
      type: `string`,
      title: `Pixels.first Party Cookie Status`
    },
    
    pixelsId: {
      sql: `${CUBE}.\`pixels.id\``,
      type: `string`,
      title: `Pixels.id`
    },
    
    pixelsLastFiredTime: {
      sql: `${CUBE}.\`pixels.last_fired_time\``,
      type: `string`,
      title: `Pixels.last Fired Time`
    },
    
    pixelsName: {
      sql: `${CUBE}.\`pixels.name\``,
      type: `string`,
      title: `Pixels.name`
    },
    
    pixelsOwnerAdAccountAccountId: {
      sql: `${CUBE}.\`pixels.owner_ad_account.account_id\``,
      type: `string`,
      title: `Pixels.owner Ad Account.account Id`
    },
    
    pixelsOwnerAdAccountId: {
      sql: `${CUBE}.\`pixels.owner_ad_account.id\``,
      type: `string`,
      title: `Pixels.owner Ad Account.id`
    },
    
    pixelsOwnerBusinessId: {
      sql: `${CUBE}.\`pixels.owner_business.id\``,
      type: `string`,
      title: `Pixels.owner Business.id`
    },
    
    pixelsOwnerBusinessName: {
      sql: `${CUBE}.\`pixels.owner_business.name\``,
      type: `string`,
      title: `Pixels.owner Business.name`
    }
  },
  
  dataSource: `default`
});
