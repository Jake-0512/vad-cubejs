cube(`UserVadminFacebookAdsetsDataTargetingFlexibleSpecEducationMajors`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_flexible_spec_education_majors\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingFlexibleSpecEducationMajorsId, adsetsDataTargetingFlexibleSpecEducationMajorsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingFlexibleSpecEducationMajorsId: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.education_majors.id\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.education Majors.id`
    },
    
    adsetsDataTargetingFlexibleSpecEducationMajorsName: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.education_majors.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.education Majors.name`
    }
  },
  
  dataSource: `default`
});
