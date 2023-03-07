cube(`UserVadminKakaoScheduleSundaytime`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_schedule_sundayTime\``,
  
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
    scheduleSundaytime: {
      sql: `${CUBE}.\`schedule.sundayTime\``,
      type: `string`,
      title: `Schedule.sundaytime`
    }
  },
  
  dataSource: `default`
});
