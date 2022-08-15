import{IsNotEmpty, IsString} from 'class-validator'

class CreatUserDto{
    @IsString()
    @IsNotEmpty()
    username:string;
    password:string
}
export default CreatUserDto;