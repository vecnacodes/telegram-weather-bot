import { Controller, Get, Post, Param, Delete, Render, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { User } from '../telegram/user.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @Render('admin')
  async getAdminPanel() {
    const users = await this.adminService.getAllUsers();
    return { users };
  }

  @Post('users/:id/block')
  async blockUser(@Param('id') id: string) {
    try {
      return await this.adminService.blockUser(parseInt(id, 10));
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException('An error occurred while blocking the user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('users/:id/unblock')
  async unblockUser(@Param('id') id: string) {
    try {
      return await this.adminService.unblockUser(parseInt(id, 10));
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException('An error occurred while unblocking the user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    try {
      await this.adminService.deleteUser(parseInt(id, 10));
      return { success: true };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException('An error occurred while deleting the user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}