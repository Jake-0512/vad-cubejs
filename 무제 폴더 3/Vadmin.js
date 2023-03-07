cube(`Vadmin`, {
  sql: `
    SELECT 
      f.api_id AS api_id_facebook,
      k.api_id AS api_id_kakao,
      g.api_id AS api_id_google
    FROM 
      vad.user_Vadmin_facebook f, vad.user_Vadmin_kakao k, vad.user_Vadmin_google g
  `,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  measures: {
    count: {
      type: `count`
    },

    totalAmount: {
      sql: `amount`,
      type: `sum`
    }
  },

  dimensions: {
    
    api_id_facebook: {
      sql: `api_id_facebook`,
      type: `string`
    }

    api_id_facebook: {
      sql: `api_id_facebook`,
      type: `string`
    }
  }
});
