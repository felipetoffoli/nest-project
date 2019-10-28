import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { Custumer } from "../models/custumer.model";
import { Result } from "../models/result.model";

@Controller('v1/custumers')
export class CustomerController {
    @Get()
    get() {
        return new Result(null, true, [],null)
    }
    @Get(':document')
    getByID(@Param('document') document: string){
       return new Result(null,  true, {}, null);
    }

    @Post()
    post(@Body() body: Custumer) {
        return new Result('Cliente criado com sucesso', true, body, null);
    }
    @Put(':document')
    put(@Param('document') document, @Body() body) {
        return new Result('Cliente alterado com sucesso', true, body, null);
    }
    @Delete(':document')
    delete(@Param('document') document, @Body() body) {
        return new Result('Cliente removido com sucesso', true, body, null);
    }
}