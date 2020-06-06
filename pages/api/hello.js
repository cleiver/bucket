const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {

  const links = await db.query(escape`
      SELECT *
      FROM link
    `)
  res.status(200).json({ links })
}