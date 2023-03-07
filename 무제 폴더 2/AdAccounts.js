cube('AdAccounts', {
    sql: `SELECT * FROM vad.ad_accounts`,
    preAggregations: {
        // Pre-Aggregations definitions go here
        // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
      },
      
    joins: {

        AdAccountsInfo: {
            relationship: `belongsTo`,
            sql: `${CUBE}.user_id = ${AdAccountsInfo}.user_id`,
        },

    },
      
    measures: {
        count: {
            type: `count`,
            drillMembers: [userId]
        }
    },
      
    dimensions: {

        _id: {
          sql: `_id`,
          type: `string`,
          primaryKey: true,
        },

        userId: {
          sql: `user_id`,
          type: `string`,
          //title: `ad_accounts user_id`
        },

        userIdAdAccountsInfo: {
            sql: `${AdAccountsInfo.userId}`,
            type: `string`,
            //title: `AdAccountsInfo userId`
        },
        
    },
      
    //dataSource: `default`
    
});

  