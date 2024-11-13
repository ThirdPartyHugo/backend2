import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './User';
import { Customer } from './Customer';

@Entity('sales')
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.sales)
  user: User;

  @ManyToOne(() => Customer, customer => customer.sales)
  customer: Customer;

  @Column('decimal', { precision: 15, scale: 2 })
  sale_amount: number;

  @Column('decimal', { precision: 15, scale: 2, nullable: true })
  commission: number;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  commission_rate: number;

  @CreateDateColumn()
  sale_date: Date;

  @Column({
    type: 'enum',
    enum: ['pending', 'confirmed', 'refunded', 'ready_to_pay'],
    default: 'pending'
  })
  status: string;

  @Column({
    type: 'enum',
    enum: ['cash', 'cheque', 'interac', 'credit_card'],
    nullable: true
  })
  payment_type: string;

  @Column({
    type: 'enum',
    enum: ['unpaid', 'paid'],
    default: 'unpaid'
  })
  payment_status: string;

  @Column({ default: false })
  invoice_sent: boolean;
}