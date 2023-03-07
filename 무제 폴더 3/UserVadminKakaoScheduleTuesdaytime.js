cube(`UserVadminKakaoScheduleTuesdaytime`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_schedule_tuesdayTime\``,
  
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
    scheduleTuesdaytime: {
      sql: `${CUBE}.\`schedule.tuesdayTime\``,
      type: `string`,
      title: `Schedule.tuesdaytime`
    }
  },
  
  dataSource: `default`
});
