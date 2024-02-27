// auto generated by rpc-ts-gen don't break
/* tslint-disable */
/* eslint-disable */

export  enum RequestType { 
    
  Open = "Open", 
  
  Close = "Close", 
  
  Heartbeat = "Heartbeat", 
  
  Send = "Send", 
  
  Consume = "Consume", 
  
  Ack = "Ack", 
  
  ConsumerGroupInfo = "ConsumerGroupInfo" 
}

export interface OpenReq {
  clientVersion: string;
  properties: Record<string, string>;
  requestId: string;
  type: string;
  clientToken?: string;
  group?: string;
  subscriptions?: Record<string, string>;
}

export interface OpenRespResult {
  /** 前端精度问题，改成了string,原来类型为i64这里预期返回java里的System.currentTimestamp()毫秒级别时间戳 */
  clientToken: string;
  nextHeartbeatDeadline: string;
}

export interface OpenResp {
  requestId: string;
  code: string;
  msg: string;
  result: OpenRespResult;
}

export interface HeartbeatReq {
  clientToken: string;
  requestId: string;
  properties?: Record<string, string>;
}

export interface CloseReq {
  clientToken: string;
  requestId: string;
  properties?: Record<string, string>;
}

export interface SendMessage {
  topic: string;
  tag?: string;
  shardingKey?: string;
  keys?: string[];
  properties?: Record<string, string>;
  body: string;
}

export interface SendReq {
  clientToken: string;
  requestId: string;
  message: SendMessage;
}

export interface MessageMeta {
  topic: string;
  /** 前端精度问题从i64改成了string这里对应类型是64位整形 */
  queueId: string;
  queueOffset: string;
  /** onlytransactionalmessagehasmsgHandle */
  msgId: string;
  msgHandle?: string;
}
export type SendResult = MessageMeta;

export interface SendResp {
  clientToken: string;
  requestId: string;
  code: string;
  msg: string;
  result: SendResult;
}

export interface ConsumeReq {
  clientToken: string;
  requestId: string;
  maxMessageNumber?: number;
  maxWaitTimeMs?: number;
}

export interface ConsumeMessage {
  /** 前端精度问题，这里预期是32位整形 */
  topic: string;
  /** 前端精度问题，这里预期是64位整形 */
  queueId: string;
  /** 前端精度问题，这里预期是64位整形，表示毫秒级别时间戳 */
  queueOffset: string;
  bornTimeStamp: string;
  /** 前端精度问题，这里预期是64位整形，表示毫秒级别时间戳 */
  bornHost: string;
  storeTimeStamp: string;
  msgId: string;
  reconsumeTimes: number;
  /** 每条消息实际只有一个tag */
  keys: string[];
  tag: string;
  properties: Record<string, string>;
  body: string;
  bodyCRC: string;
  msgHandle: string;
}

export interface ConsumeResult {
  messages: ConsumeMessage[];
}

export interface ConsumeResp {
  clientToken: string;
  requestId: string;
  code: string;
  msg: string;
  result: ConsumeResult;
}

export interface AckReq {
  clientToken: string;
  requestId: string;
  acks: string[];
  nacks: string[];
}

export interface FailAckHandleEntry {
  msgHandle: string;
  code: string;
  msg: string;
}

export interface AckResult {
  failHandles: FailAckHandleEntry[];
}

export interface AckResp {
  clientToken: string;
  requestId: string;
  code: string;
  msg: string;
  result: AckResult;
}
