import { Controller, Get, Param, Req } from "@nestjs/common";
import { FindTaskByIdService } from "../services";

@Controller()
export class FindTaskByIdController {
  constructor(private readonly findTaskByIdService: FindTaskByIdService) {}

  @Get(':id')
  public handle(@Param('id') id: String) {
      return `Hello ${Number(id)} user`
  }
}