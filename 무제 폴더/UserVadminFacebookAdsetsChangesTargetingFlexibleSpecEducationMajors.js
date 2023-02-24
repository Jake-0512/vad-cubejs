cube(`UserVadminFacebookAdsetsChangesTargetingFlexibleSpecEducationMajors`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_flexible_spec_education_majors\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingFlexibleSpecEducationMajorsId, adsetsChangesTargetingFlexibleSpecEducationMajorsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingFlexibleSpecEducationMajorsId: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.education_majors.id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.education Majors.id`
    },
    
    adsetsChangesTargetingFlexibleSpecEducationMajorsName: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.education_majors.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.education Majors.name`
    }
  },
  
  dataSource: `default`
});
