import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task_name: string;

  @Column({ nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'in_progress', 'completed'],
    default: 'pending'
  })
  status: string;

  @ManyToOne(() => User, user => user.tasks)
  assigned_to: User;

  @Column({ type: 'date', nullable: true })
  due_date: Date;
}