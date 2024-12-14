import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


//Serve JWT
class jwtService {
  constructor() {
    this.secret = process.env.JWT_SECRET;
    this.expiresIn = process.env.JWT_EXPIRES_IN; // default to 1 hour
  }

  generateToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, this.secret, { expiresIn: this.expiresIn }, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
  }

  verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secret, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }
}

export {jwtService}