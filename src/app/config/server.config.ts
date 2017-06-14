import {Injectable} from '@angular/core';
/**
 * Created by Administrator on 2017/5/28.
 */

export const ServerInfo = {
  host: 'localhost:8080',
  protocol: 'http',
  interfaces: [
    {
      name: 'index',
      type: 'post',
      url: '/daily/schedule/query'
    }, {
      name: 'calendar',
      type: 'post',
      url: '/daily/schedule/calendar'
    }, {
      name: 'schedule_list',
      type: 'post',
      url: '/daily/schedule/query'
    }
  ]
};

@Injectable()
export class ServerConfig {
  getUrl(interfaceName: any) {
    return ServerInfo.protocol + '://' + ServerInfo.host + ServerInfo.interfaces.find((value, index) => interfaceName === value.name).url;
  }
}
