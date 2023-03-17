// Cube.js configuration options: https://cube.dev/docs/config
/** @type{ import('@cubejs-backend/server-core').CreateOptions } */
module.exports = {
    // preAggregationsSchema: `my_pre_aggregations`,
    processSchema: (schema) => {
        schema.name = 'my_cube_schema';
        return schema;
      },
};
