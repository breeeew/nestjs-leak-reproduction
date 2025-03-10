import {Inject, Injectable, Scope} from '@nestjs/common';
import {REQUEST} from "@nestjs/core";
import {Request} from "express";

@Injectable({scope: Scope.REQUEST})
export class AppService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  getHello(): string {
    return 'Hello World!';
  }
}
