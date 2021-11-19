// SPDX-FileCopyrightText: 2021 Chorus One AG
// SPDX-License-Identifier: GPL-3.0

use anker::token::BLamports;
use lido::token::{Lamports, StLamports};
use solana_program_test::tokio;
use testlib::anker_context::Context;

const TEST_DEPOSIT_AMOUNT: StLamports = StLamports(1_000_000_000);

#[tokio::test]
async fn test_successful_deposit() {
    let mut context = Context::new().await;
    let (_owner, recipient) = context.deposit(Lamports(TEST_DEPOSIT_AMOUNT.0)).await;

    let reserve_balance = context
        .solido_context
        .get_st_sol_balance(context.reserve)
        .await;
    let recipient_balance = context.get_b_sol_balance(recipient).await;

    // The context starts Solido with 1:1 exchange rate.
    assert_eq!(reserve_balance, TEST_DEPOSIT_AMOUNT);
    assert_eq!(recipient_balance, BLamports(TEST_DEPOSIT_AMOUNT.0));
}

#[tokio::test]
async fn test_successful_deposit_different_exchange_rate() {
    let mut context = Context::new_different_exchange_rate(Lamports(1_000_000_000)).await;
    let (_owner, recipient) = context.deposit(Lamports(TEST_DEPOSIT_AMOUNT.0)).await;
    let reserve_balance = context
        .solido_context
        .get_st_sol_balance(context.reserve)
        .await;
    let recipient_balance = context.get_b_sol_balance(recipient).await;

    // The exchange rate is now 1:2.
    assert_eq!(reserve_balance, StLamports(500_000_000));
    assert_eq!(recipient_balance, BLamports(TEST_DEPOSIT_AMOUNT.0));
}
