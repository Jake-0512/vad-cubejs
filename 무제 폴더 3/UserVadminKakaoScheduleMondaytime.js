cube(`UserVadminKakaoScheduleMondaytime`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_schedule_mondayTime\``,
  
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
    scheduleMondaytime: {
      sql: `${CUBE}.\`schedule.mondayTime\``,
      type: `string`,
      title: `Schedule.mondaytime`
    }
  },
  
  dataSource: `default`
});
