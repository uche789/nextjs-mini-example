import sq3 from 'sqlite3';

const sqlite3 = sq3.verbose();

const start = () => {
  return new sqlite3.Database('./build/data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to database.');
  });
};

export default {
  fetch: async function () {
    const db = start();
    const sql = 'SELECT * FROM cat';
    return new Promise((resolve, reject) => {
      db.all(sql,[], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }

        db.close();
      });
    });
  },
  fetchTypes: async function () {
    const db = start();
    const sql = 'SELECT * FROM cat_type';
    return new Promise((resolve, reject) => {
      db.all(sql,[], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }

        db.close();
      });
    })
  }
}