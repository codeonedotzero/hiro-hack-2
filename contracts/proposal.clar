(impl-trait .proposal-trait.proposal-trait)

(define-public (execute (sender principal))
	(begin
		;; Enable genesis extensions.
		(try! (contract-call? .core set-extensions
			(list
				{extension: .membership-token, enabled: true}
				{extension: .proposal-milestones, enabled: true}
				{extension: .proposal-submission, enabled: true}
				{extension: .proposal-voting, enabled: true}
				{extension: .proposal, enabled: true}
				{extension: .proposal2, enabled: true}
			)
		))

		;; Mint initial token supply.
		(try! (contract-call? .membership-token mint u1000 sender))

		(print "proposal executed.")
		(ok true)
	)
)