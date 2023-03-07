cube(`UserVadminFacebookPixels`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_pixels\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [pixelsChangesId, pixelsChangesName, pixelsChangesOwnerAdAccountAccountId, pixelsChangesOwnerAdAccountId, pixelsChangesOwnerBusinessId, pixelsChangesOwnerBusinessName, pixelsDataId, pixelsDataName, pixelsDataOwnerAdAccountAccountId, pixelsDataOwnerAdAccountId, pixelsDataOwnerBusinessId, pixelsDataOwnerBusinessName, pixelsParentid, pixelsId, pixelsIsConsolidatedContainer, pixelsName, pixelsOwnerAdAccountAccountId, pixelsOwnerAdAccountId, pixelsOwnerBusinessId, pixelsOwnerBusinessName, pixelsValidEntries]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    pixelsApiAccesstoken: {
      sql: `${CUBE}.\`pixels._api.accessToken\``,
      type: `string`,
      title: `Pixels. Api.accesstoken`
    },
    
    pixelsApiLocale: {
      sql: `${CUBE}.\`pixels._api.locale\``,
      type: `string`,
      title: `Pixels. Api.locale`
    },
    
    pixelsChangesCode: {
      sql: `${CUBE}.\`pixels._changes.code\``,
      type: `string`,
      title: `Pixels. Changes.code`
    },
    
    pixelsChangesCreationTime: {
      sql: `${CUBE}.\`pixels._changes.creation_time\``,
      type: `string`,
      title: `Pixels. Changes.creation Time`
    },
    
    pixelsChangesDataUseSetting: {
      sql: `${CUBE}.\`pixels._changes.data_use_setting\``,
      type: `string`,
      title: `Pixels. Changes.data Use Setting`
    },
    
    pixelsChangesFirstPartyCookieStatus: {
      sql: `${CUBE}.\`pixels._changes.first_party_cookie_status\``,
      type: `string`,
      title: `Pixels. Changes.first Party Cookie Status`
    },
    
    pixelsChangesId: {
      sql: `${CUBE}.\`pixels._changes.id\``,
      type: `string`,
      title: `Pixels. Changes.id`
    },
    
    pixelsChangesLastFiredTime: {
      sql: `${CUBE}.\`pixels._changes.last_fired_time\``,
      type: `string`,
      title: `Pixels. Changes.last Fired Time`
    },
    
    pixelsChangesName: {
      sql: `${CUBE}.\`pixels._changes.name\``,
      type: `string`,
      title: `Pixels. Changes.name`
    },
    
    pixelsChangesOwnerAdAccountAccountId: {
      sql: `${CUBE}.\`pixels._changes.owner_ad_account.account_id\``,
      type: `string`,
      title: `Pixels. Changes.owner Ad Account.account Id`
    },
    
    pixelsChangesOwnerAdAccountId: {
      sql: `${CUBE}.\`pixels._changes.owner_ad_account.id\``,
      type: `string`,
      title: `Pixels. Changes.owner Ad Account.id`
    },
    
    pixelsChangesOwnerBusinessId: {
      sql: `${CUBE}.\`pixels._changes.owner_business.id\``,
      type: `string`,
      title: `Pixels. Changes.owner Business.id`
    },
    
    pixelsChangesOwnerBusinessName: {
      sql: `${CUBE}.\`pixels._changes.owner_business.name\``,
      type: `string`,
      title: `Pixels. Changes.owner Business.name`
    },
    
    pixelsDataCode: {
      sql: `${CUBE}.\`pixels._data.code\``,
      type: `string`,
      title: `Pixels. Data.code`
    },
    
    pixelsDataCreationTime: {
      sql: `${CUBE}.\`pixels._data.creation_time\``,
      type: `string`,
      title: `Pixels. Data.creation Time`
    },
    
    pixelsDataDataUseSetting: {
      sql: `${CUBE}.\`pixels._data.data_use_setting\``,
      type: `string`,
      title: `Pixels. Data.data Use Setting`
    },
    
    pixelsDataFirstPartyCookieStatus: {
      sql: `${CUBE}.\`pixels._data.first_party_cookie_status\``,
      type: `string`,
      title: `Pixels. Data.first Party Cookie Status`
    },
    
    pixelsDataId: {
      sql: `${CUBE}.\`pixels._data.id\``,
      type: `string`,
      title: `Pixels. Data.id`
    },
    
    pixelsDataLastFiredTime: {
      sql: `${CUBE}.\`pixels._data.last_fired_time\``,
      type: `string`,
      title: `Pixels. Data.last Fired Time`
    },
    
    pixelsDataName: {
      sql: `${CUBE}.\`pixels._data.name\``,
      type: `string`,
      title: `Pixels. Data.name`
    },
    
    pixelsDataOwnerAdAccountAccountId: {
      sql: `${CUBE}.\`pixels._data.owner_ad_account.account_id\``,
      type: `string`,
      title: `Pixels. Data.owner Ad Account.account Id`
    },
    
    pixelsDataOwnerAdAccountId: {
      sql: `${CUBE}.\`pixels._data.owner_ad_account.id\``,
      type: `string`,
      title: `Pixels. Data.owner Ad Account.id`
    },
    
    pixelsDataOwnerBusinessId: {
      sql: `${CUBE}.\`pixels._data.owner_business.id\``,
      type: `string`,
      title: `Pixels. Data.owner Business.id`
    },
    
    pixelsDataOwnerBusinessName: {
      sql: `${CUBE}.\`pixels._data.owner_business.name\``,
      type: `string`,
      title: `Pixels. Data.owner Business.name`
    },
    
    pixelsParentid: {
      sql: `${CUBE}.\`pixels._parentId\``,
      type: `string`,
      title: `Pixels. Parentid`
    },
    
    pixelsCode: {
      sql: `${CUBE}.\`pixels.code\``,
      type: `string`,
      title: `Pixels.code`
    },
    
    pixelsConfig: {
      sql: `${CUBE}.\`pixels.config\``,
      type: `string`,
      title: `Pixels.config`
    },
    
    pixelsCreationTime: {
      sql: `${CUBE}.\`pixels.creation_time\``,
      type: `string`,
      title: `Pixels.creation Time`
    },
    
    pixelsCreator: {
      sql: `${CUBE}.\`pixels.creator\``,
      type: `string`,
      title: `Pixels.creator`
    },
    
    pixelsDataUseSetting: {
      sql: `${CUBE}.\`pixels.data_use_setting\``,
      type: `string`,
      title: `Pixels.data Use Setting`
    },
    
    pixelsDescription: {
      sql: `${CUBE}.\`pixels.description\``,
      type: `string`,
      title: `Pixels.description`
    },
    
    pixelsDuplicateEntries: {
      sql: `${CUBE}.\`pixels.duplicate_entries\``,
      type: `string`,
      title: `Pixels.duplicate Entries`
    },
    
    pixelsEnableAutoAssignToAccounts: {
      sql: `${CUBE}.\`pixels.enable_auto_assign_to_accounts\``,
      type: `string`,
      title: `Pixels.enable Auto Assign to Accounts`
    },
    
    pixelsEventStats: {
      sql: `${CUBE}.\`pixels.event_stats\``,
      type: `string`,
      title: `Pixels.event Stats`
    },
    
    pixelsEventTimeMax: {
      sql: `${CUBE}.\`pixels.event_time_max\``,
      type: `string`,
      title: `Pixels.event Time Max`
    },
    
    pixelsEventTimeMin: {
      sql: `${CUBE}.\`pixels.event_time_min\``,
      type: `string`,
      title: `Pixels.event Time Min`
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
    
    pixelsIsConsolidatedContainer: {
      sql: `${CUBE}.\`pixels.is_consolidated_container\``,
      type: `string`,
      title: `Pixels.is Consolidated Container`
    },
    
    pixelsIsCrm: {
      sql: `${CUBE}.\`pixels.is_crm\``,
      type: `string`,
      title: `Pixels.is Crm`
    },
    
    pixelsIsMtaUse: {
      sql: `${CUBE}.\`pixels.is_mta_use\``,
      type: `string`,
      title: `Pixels.is Mta Use`
    },
    
    pixelsIsRestrictedUse: {
      sql: `${CUBE}.\`pixels.is_restricted_use\``,
      type: `string`,
      title: `Pixels.is Restricted Use`
    },
    
    pixelsIsUnavailable: {
      sql: `${CUBE}.\`pixels.is_unavailable\``,
      type: `string`,
      title: `Pixels.is Unavailable`
    },
    
    pixelsLastFiredTime: {
      sql: `${CUBE}.\`pixels.last_fired_time\``,
      type: `string`,
      title: `Pixels.last Fired Time`
    },
    
    pixelsLastUploadApp: {
      sql: `${CUBE}.\`pixels.last_upload_app\``,
      type: `string`,
      title: `Pixels.last Upload App`
    },
    
    pixelsLastUploadAppChangedTime: {
      sql: `${CUBE}.\`pixels.last_upload_app_changed_time\``,
      type: `string`,
      title: `Pixels.last Upload App Changed Time`
    },
    
    pixelsMatchRateApprox: {
      sql: `${CUBE}.\`pixels.match_rate_approx\``,
      type: `string`,
      title: `Pixels.match Rate Approx`
    },
    
    pixelsMatchedEntries: {
      sql: `${CUBE}.\`pixels.matched_entries\``,
      type: `string`,
      title: `Pixels.matched Entries`
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
    },
    
    pixelsUsage: {
      sql: `${CUBE}.\`pixels.usage\``,
      type: `string`,
      title: `Pixels.usage`
    },
    
    pixelsValidEntries: {
      sql: `${CUBE}.\`pixels.valid_entries\``,
      type: `string`,
      title: `Pixels.valid Entries`
    }
  },
  
  dataSource: `default`
});
