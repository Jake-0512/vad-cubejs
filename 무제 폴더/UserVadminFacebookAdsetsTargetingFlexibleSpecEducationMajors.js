cube(`UserVadminFacebookAdsetsTargetingFlexibleSpecEducationMajors`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_flexible_spec_education_majors\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingFlexibleSpecEducationMajorsId, adsetsTargetingFlexibleSpecEducationMajorsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingFlexibleSpecEducationMajorsId: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.education_majors.id\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.education Majors.id`
    },
    
    adsetsTargetingFlexibleSpecEducationMajorsName: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.education_majors.name\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.education Majors.name`
    }
  },
  
  dataSource: `default`
});
