#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/cb70c58dcad64b437fd36db59115c7dac4f5edf8f5b1773937eb87d43e996588/contract';
import endContract from '../../snapshots/cb70c58dcad64b437fd36db59115c7dac4f5edf8f5b1773937eb87d43e996588/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  lit,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'contract',
        columns: [
          col('amount', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('clientId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('freelancerId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('projectId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('active'),
            codecRef: { codecId: 'pg/text@1' },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('contract_status_check_24c8121c', '"status" IN (\'active\')'),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'project',
        columns: [
          col('budgetMax', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('budgetMin', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('category', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('clientId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('deadline', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('description', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('open'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('project_status_check_d373f548', "\"status\" IN ('open', 'in_progress')"),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'proposal',
        columns: [
          col('coverLetter', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('estimatedDuration', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('freelancerId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('projectId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('proposedPrice', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('pending'),
            codecRef: { codecId: 'pg/text@1' },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'proposal_status_check_4ecfb8f7',
            "\"status\" IN ('pending', 'accepted', 'rejected')",
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'user',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('password', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('role', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('user_role_check_ae5d976e', "\"role\" IN ('client', 'freelancer')"),
        ],
      }),
      this.addUnique({
        schema: 'public',
        table: 'contract',
        constraint: 'contract_projectId_key',
        columns: ['projectId'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'proposal',
        constraint: 'proposal_projectId_freelancerId_key',
        columns: ['projectId', 'freelancerId'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'user',
        constraint: 'user_email_key',
        columns: ['email'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'contract',
        index: 'contract_clientId_idx_153a9a49',
        columns: ['clientId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'contract',
        index: 'contract_freelancerId_idx_c8137280',
        columns: ['freelancerId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'project',
        index: 'project_clientId_idx_153a9a49',
        columns: ['clientId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'proposal',
        index: 'proposal_freelancerId_idx_c8137280',
        columns: ['freelancerId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'proposal',
        index: 'proposal_projectId_idx_a96e4d92',
        columns: ['projectId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'contract',
        foreignKey: {
          name: 'contract_projectId_fkey',
          columns: ['projectId'],
          references: { schema: 'public', table: 'project', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'contract',
        foreignKey: {
          name: 'contract_clientId_fkey',
          columns: ['clientId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'contract',
        foreignKey: {
          name: 'contract_freelancerId_fkey',
          columns: ['freelancerId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'project',
        foreignKey: {
          name: 'project_clientId_fkey',
          columns: ['clientId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'proposal',
        foreignKey: {
          name: 'proposal_projectId_fkey',
          columns: ['projectId'],
          references: { schema: 'public', table: 'project', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'proposal',
        foreignKey: {
          name: 'proposal_freelancerId_fkey',
          columns: ['freelancerId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
