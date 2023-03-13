cube(`aa`, {
    sql: `
        SELECT 
            userId,
            ctr,
            cpc,
            clicks,
            spend,
            cpm,
            impressions,
            reach,
            frequency,
            createdAt,
            '총합' as title
        FROM 
            vad2.insight 

        UNION ALL

        SELECT 
            userId,
            ctr,
            cpc,
            clicks,
            spend,
            cpm,
            impressions,
            reach,
            frequency,
            createdAt,
            'facebook' as title
        FROM 
            vad2.insight_facebook 

        UNION ALL
        
        SELECT 
            userId,
            ctr,
            cpc,
            clicks,
            spend,
            cpm,
            impressions,
            reach,
            frequency,
            createdAt,
            'google' as title
        FROM 
            vad2.insight_google 
    `,
      
    preAggregations: {},
      
    joins: {},
      
      measures: {
  
        ctr: {
            type: `sum`,
            sql: `ctr`,
        },

        cpc: {
            type: `sum`,
            sql: `cpc`,
        },
  
        clicks: {
            type: `sum`,
            sql: `clicks`,
        },
  
        spend: {
          type: `sum`,
          sql: `spend`,
        },

        cpm: {
          type: `sum`,
          sql: `cpm`,
        },

        impressions: {
          type: `sum`,
          sql: `impressions`,
        },
  
        reach: {
            type: `sum`,
            sql: `reach`,
        },

        frequency: {
            type: `sum`,
            sql: `frequency`,
        },
  
      },
      
      dimensions: {

        _id: {
          sql: `_id`,
          type: `string`,
          primaryKey: true,
        },

        title: {
            sql: `title`,
            type: `string`,
          },
        
        userId: {
          sql: `userId`,
          type: `string`,
        },  

        createdAt: {
            sql: `createdAt`,
            type: `time`
        }

      },
});