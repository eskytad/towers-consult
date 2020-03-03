import { CommonUtils } from '../../utils/common-utils';

export class HelloService {

  public static async getHello(event: any): Promise<any> {
    console.log('This method is called');
    await new CommonUtils().validateCredentials();

    const greet: any = {
      statusCode: 200,
      body: {
        message: 'Hello ' + event.name,
      },
    };
    return greet;
  }
}