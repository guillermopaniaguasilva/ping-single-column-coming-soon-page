import { FormEvent, useState } from 'react';
import { Form, Input, ErrorMessage, Submit } from './styles';

const NotifyMeForm = () => {
	const [email, setEmail] = useState({ value: '', error: false });

	const validEmailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!email.value.match(validEmailRegex)) {
			setEmail({ value: email.value, error: true });
			return;
		}

		console.log('email:', email);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				value={email.value}
				placeholder="Your email address..."
				hasError={email.error}
				onChange={(e) =>
					setEmail({ value: e.target.value.toLowerCase(), error: false })
				}
			/>
			{email.error && (
				<ErrorMessage>Please provide a valid email address.</ErrorMessage>
			)}
			<Submit>Notify Me</Submit>
		</Form>
	);
};

export default NotifyMeForm;
