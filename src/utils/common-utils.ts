import AWS from 'aws-sdk';

export class CommonUtils {
  public async validateCredentials(): Promise<any> {
    return await new Promise((resolve: any, reject: any) => {
      AWS.config.getCredentials((err: any) => {
        if (err) {
          const options: any = {
            message: 'Azure session is not valid.',
            attributes: err,
            remediation: 'Try again with refresh azure session',
            type: 'Azure Session Error',
          };
          return reject(options);
        }
        return resolve(true);
      });
    });
  }
}